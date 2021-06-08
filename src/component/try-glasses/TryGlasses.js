import React, { Component } from 'react'
import './css/bootstrap-grid.css'
import glassesData from './glassesData.json'
import Style from './css/Style.module.css'

export default class TryGlasses extends Component {

    state = {
        selectedIndex: 0
    }

    renderHeaderSection = () => {
        return (
            <section className={Style['header']}>
                <div className="container">
                    <h1 className={Style['header-title']}>TRY GLASSES APP ONLINE</h1>
                </div>
            </section>
        )
    }

    renderMainSection = () => {
        return (
                <section className={Style['main']}>
                    {this.renderTryGlassesSection()}
                </section>
        )
    }

    renderGlassesTemplates = () => {
        return glassesData.map((glasses, index) => {
            return (
                <div className="col-2" key={index}>
                    <div className={Style['glasses-item']} onClick={() => { this.updateModal(index) }}>
                        <img src={glasses.url} alt="glasses" />
                    </div>
                </div>
            )
        })
    }

    renderModel = () => {
        let timesNow = Date.now();
        let index = this.state.selectedIndex

        const keyFrame = `@keyframes glassesAnimation${timesNow} {
            from {
                transform: rotate(45deg) translate(-50%, 0);
                opacity: 0;
            }
            to {
                transform: rotate(0deg) translate(-50%, 0);
                opacity: 0.7;
            }
        }`

        const glassesStyle = {
            position: 'absolute',
            top: '23%',
            left: '50%',
            transformOrigin: 'right bottom',
            animation: `glassesAnimation${timesNow} 0.7s ease forwards`,
        }

        return (
            <div className={Style['model']}>
                <style>
                    {keyFrame}
                </style>
                <div className={Style['image']}>
                    <img src='./assets/images/glasses/model.jpg' alt="Glasses" />
                    <img style={glassesStyle} className={Style['glasses-image']} src={glassesData[index].url} alt="Glasses" />
                </div>
                <div className={Style['info']}>
                    <h3 className={Style['name']}>{glassesData[index].name}</h3>
                    <p className={Style['description']}>{glassesData[index].desc}</p>
                </div>
            </div>
        )
    }

    updateModal = (index) => {
        const newState = {
            selectedIndex: index
        }

        this.setState(newState)
    }

    renderTryGlassesSection = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {this.renderModel()}
                    </div>
                    <div className="col-6">
                    <div className={Style['model']}>
                            <div className={Style['image']}>
                                <img src='./assets/images/glasses/model.jpg' alt="Glasses" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`row ${Style['glasses-box']}`}>
                    {this.renderGlassesTemplates()}
                </div>
            </div>
        )
    }

    render() {

        return (
            <div className={Style['wrapper']}>
                {this.renderHeaderSection()}
                {this.renderMainSection()}
            </div>
        )
    }
}
