//It will require personRender.js which will render
import React from 'react'
import PersonRender from "./personRender"

export default function listRenderPerson() {
    var persons = [
        {
            id: 1,
            name: "Anshul",
            superhero: "Spiderman",
        },
        {
            id: 2,
            name: "Zayn",
            superhero: "Batman",
        },
        {
            id: 3,
            name: "Ashwin",
            superhero: "Thor",
        }
    ]
    var personList= persons.map((person) => <PersonRender key= {person.id} person= {person}></PersonRender>)
    return (
        <div>
            {personList}
        </div>
    )
}
