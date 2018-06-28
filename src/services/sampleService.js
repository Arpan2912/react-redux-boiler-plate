import React, { Component } from 'react'

export default class sampleService {

    static sampleApi() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
    }
}
