var express = require('express');
var router = express.Router();

var term = require('../models/term');

router.get('/', term.getAll, renderIndex);
router.get('/new', renderNew);
router.get('/:id/edit', term.find, renderEdit);
router.get('/:id', term.find, renderShow);
router.post('/', term.create, redirectShow);
router.delete('/:id', term.delete, redirectIndex);
router.put('/:id', term.update, redirectShow);

function renderIndex(req, res){
    var mustacheVar = {
        termsList: res.locals.terms
    }
    res.render('./terms/index', mustacheVar);
}

function renderShow(req,res){
    var mustacheVariables = res.locals.term;
    res.render('./terms/show', mustacheVariables);
  }
  
  function renderNew(req, res){
    res.render('./terms/new');
  }
  function redirectShow(req, res) {
    res.redirect(`/terms/${res.locals.term_id}`);
  }
  
  function renderEdit(req, res){
    var mustacheVariables = res.locals.term;
    res.render('./terms/edit', mustacheVariables);
    
  }
  
  function redirectIndex(req, res){
    res.redirect('/terms');
  }
  

module.exports = router;