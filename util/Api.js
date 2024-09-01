const express = require('express');
const axios = require('axios');

exports.getApi = async (url) => {
    try {
        const response = await axios.get(url);

        return response?.data;
    } catch (error) {
        return error.message;
    }
};
