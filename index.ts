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

    return new Response('Not Found', { status: 404 })
  }
})

console.log(`Server running at http://localhost:${server.port}`)
