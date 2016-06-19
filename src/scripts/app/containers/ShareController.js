import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import ShareController from '../components/ShareController';

import * as modalActions from '../actions/modal';
console.log('MODALACTIONS', modalActions)

function mapStateToProps(state) {
    return {
        beats: state.beats,
        bpm: state.config.bpm,
        activePresetID: state.config.activePresetID,
        hitChance: state.config.hitChance,
        instruments: state.instruments,
        customPreset: state.customPreset,
    }
}

function mapDispatchToProps(dispatch) {
    const actions = {
        ...modalActions
    }

    return {
        actions: {
            ...bindActionCreators(actions, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareController);
