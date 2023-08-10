const Router = require('express')
const messages = require('@controllers/messagesController')
const blogs = require('@controllers/blogs')
const users = require('@controllers/users')
const login = require('@controllers/login')

const router = Router()

router.get('/messages', messages.getAll)
router.post('/messages', messages.create)
router.delete('/messages/:id', messages.destroy)

router.use('/login', login)
router.use('/blogs', blogs)
router.use('/users', users)

router.get('/health', (req, res) => res.send('ok'))

module.exports = router
