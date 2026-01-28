// Our goals

// Step 1: When the submit button is pressed

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
}
