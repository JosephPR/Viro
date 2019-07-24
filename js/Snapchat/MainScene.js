'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARScene,
  ViroMaterials,
  ViroAmbientLight,
  ViroSpotLight,
  ViroDirectionalLight,
  ViroAnimations,
  ViroParticleEmitter,
  ViroSurface,
  Viro3DObject,
} from 'react-viro';

var createReactClass = require('create-react-class');
var MainScene = createReactClass({
  getInitialState() {
    return {
      runAnimation:true,
    }
  },

  render: function() {
    return (
      <ViroARScene>
      <ViroDirectionalLight color="#ffffff" direction={[0,-1,-.2]}/>
      <ViroAmbientLight color="#ffffff" intensity={400}/>

      <Viro3DObject
        source={require('../res/icecreamman_anim/icecreamman_anim_a.vrx')}
        resources={[require('../res/icecreamman_anim/icecreamman_diffuse.png'),
                    require('../res/icecreamman_anim/icecreamman_normal.png'),
                    require('../res/icecreamman_anim/icecreamman_specular.png')]}
        position={[1, -1, -3]}
        scale={[.5, .5, .5]}
        type="VRX"
        dragType="FixedToWorld" onDrag={()=>{}}
        onClick={this._onTappedIcecream}
        animation={{name:"02", run:this.state.runAnimation, loop:true,}}
      />
      <Viro3DObject
        source={require('../res/pumpkinman_anim/pumpkinman_anim.vrx')}
        resources={[require('../res/pumpkinman_anim/pumpkinman_head_diffuse.png'),
                    require('../res/pumpkinman_anim/pumpkinman_head_normal.png'),
                    require('../res/pumpkinman_anim/pumpkinman_head_specular.png'),
                    require('../res/pumpkinman_anim/pumpkinman_body_diffuse.png'),
                    require('../res/pumpkinman_anim/pumpkinman_body_normal.png'),
                    require('../res/pumpkinman_anim/pumpkinman_body_specular.png'),
                  ]}
        position={[0, -1, -3]}
        scale={[.5, .5, .5]}
        type="VRX"
        dragType="FixedToWorld" onDrag={()=>{}}
        onClick={this._onTappedPumpkin}
        animation={{name:"01", run:this.state.runAnimation, loop:true,}}
      />
      <Viro3DObject
        source={require('../res/turkeyman_anim/turkeyman_anim.vrx')}
        resources={[
                    require('../res/turkeyman_anim/turkeyman_diffuse.jpg'),
                    require('../res/turkeyman_anim/turkeyman_normal.jpg'),
                    require('../res/turkeyman_anim/turkeyman_specular.jpg'),
                  ]}
        position={[-2, -1, -3]}
        scale={[.9, .9, .9]}
        type="VRX"
        dragType="FixedToWorld" onDrag={()=>{}}
        onClick={this._onTappedTurkeyman}
        animation={{name:"03", run:this.state.runAnimation, loop:true,}}
      />

      </ViroARScene>
    );
  },

  _onTappedIcecream() {
    this.setState({
      runAnimation : !this.state.runAnimation,
    })
  },
  _onTappedPumpkin() {
    this.setState({
      runAnimation : !this.state.runAnimation,
    })
  },
  _onTappedTurkey() {
    this.setState({
      runAnimation : !this.state.runAnimation,
    })
  },
});

module.exports = MainScene;
