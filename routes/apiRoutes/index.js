const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const apiRoutes = require('./routes/apiRoutes');
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));




append.use('/api', apiRoutes);

module.exports = router;