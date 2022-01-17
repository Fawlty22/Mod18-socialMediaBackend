const router = require('express').Router();
const { addThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

//POST thought to user at /thoughts/:userId
router
    .route('/:userId')
    .post(addThought)
//PUT reaction to thought and DELETE thought at /thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought)
//DELETE reaction at /thoughts/:userId/:thoughtId/:reactionId
router  
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction)


module.exports = router;