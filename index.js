// Our goals

// Step 1: When the submit button is pressed

function loadComments() {

    console.log("...loading comments")

    let loadedComments = localStorage.getItem("savedComments")

    if(loadedComments) {
        let commentList = document.getElementById("comment-list")

        // if loaded comments is not null, show the comments in the HTML
        commentList.innerHTML = loadedComments
    } else {
        console.log("savedComments was not found")
    }
}

function addComment() {
    // alert("Comment submitted!")

    // Step 2: Get data from our form inputs
    let nameInput = document.getElementById("nameInput")

    let commentText = document.getElementById("commentTextArea")
    // alert("Comment submitted by: " + nameInput.value)

    // Step 3: Show it in the comments section for our users
    let commentList = document.getElementById("comment-list")

    let currentCommentData = commentList.innerHTML

    let newComments = currentCommentData + `
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
        <div class="fw-bold">${nameInput.value}</div>
        ${commentText.value} 
        </div>
    </li>`

    commentList.innerHTML = newComments

    saveComments(newComments)
}

function saveComments(comments) {
    // receive our current list of comments and save them to LocalStorage
    
    console.log("...saving comments")

    localStorage.setItem("savedComments", comments)

    console.log("comments saved!")
}

// call loadComments when page loads
loadComments()