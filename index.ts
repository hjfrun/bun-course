import figlet from "figlet"

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === '/') {
      const body = figlet.textSync('Hello LinTing, I am learning Bun!')
      return new Response(body)
    }

    if (url.pathname === '/about') {
      return new Response('About page')
    }

    if (url.pathname === '/contact') {
      return new Response('Contact page')
    }

    if (url.pathname === '/feed') {
      throw new Error('Feed is not available')
    }

    return new Response('Not Found', { status: 404 })
  },
  error(err) {
    // return new Response(err.message, { status: 500 })
    return new Response(`<pre> ${err} \n ${err.stack}</pre>`, {
      headers: { 'Content-Type': 'text/html' }
    })
  }
})

console.log(`Server running at http://localhost:${server.port}`)
