const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

router.get('/about', (req, res) => {
    res.render('About')
})
router.get('/auth/register', (req, res) => {
    res.render('register')
})
router.get('/collections', (req, res) => {
    res.render('collections')
})
router.get('/ForHer', (req, res) => {
    res.render('ForHer')
})
router.get('/forhim', (req, res) => {
    res.render('forhim')
})
router.get('/io', (req, res) => {
    res.render('io')
})
router.get('', (req, res) => {
    res.render('Livon')
})
router.get('/Livon', (req, res) => {
    res.render('Livon')
})
router.get('/Pcg', (req, res) => {
    res.render('Pcg')
})
router.get('/register', (req, res) => {
    res.render('register')
})
router.get('/Login', (req, res) => {
    res.render('Login')
})




router.get('/baguettebag', (req, res) => {
    res.render('baguettebag')
})
router.get('/backpack', (req, res) => {
    res.render('backpack')
})
router.get('/shoulderbag', (req, res) => {
    res.render('shoulderbag')
})
router.get('/bodybag', (req, res) => {
    res.render('bodybag')
})
module.exports = router;