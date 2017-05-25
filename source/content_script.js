function walk(node) {
  document.querySelectorAll('.tweet-text img[alt="👏"]').forEach(node => {
    node.parentNode.removeChild(node)
  })
}

walk(document.body)

new MutationObserver(function() {
  walk(document.body)
}).observe(document.body, {
  childList: true,
})
