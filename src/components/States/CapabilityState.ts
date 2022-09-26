import {atom} from 'recoil'


const capabilityState  = atom({
    key: 'capabilityID', // capability id
    default: ''
})

const capabilityFormState = atom({
    key: 'capabilityForm',
    default: false
})

const selectedSyllabusState = atom({
    key: 'selectedSyllabusState',
    default: <string[]>[]
})

const calState = atom({
    key: 'calState',
    default: false
})

const netsatScoreState = atom({
    key: 'netsatScoreState',
    default: {}
})


export {capabilityState, capabilityFormState, selectedSyllabusState, calState, netsatScoreState}