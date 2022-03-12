async function markDone(element, id) {
    event.preventDefault()
    try {
        let headers = new Headers({ 'Content-Type' : 'application/json' })
        let body = JSON.stringify({ task: { done: element.checked } })
        let response = await fetch(`/tasks/${id}?_method=put`, { headers: headers, body: body, method: 'PUT' })
        let data = await response.json()
        let task = data.task
        let parent = element.parentNode


        if (task.done) {
            element.checked = true
            parent.classList.add('is-done')
            parent.classList.add('has-text-success')
        } else {
            element.checked = false
            parent.classList.remove('is-done')
            parent.classList.remove('has-text-success')
        }
    } catch (error) {
        console.error(error)
    }
}