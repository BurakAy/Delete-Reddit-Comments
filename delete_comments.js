// check if comments exist
if (document.querySelector('shreddit-profile-comment')) {
  const selectComment = document.querySelector("#main-content > div:nth-child(3) > article:nth-child(4) > shreddit-profile-comment > div > div.block.ml-lg.relative > shreddit-comment-action-row > shreddit-overflow-menu")
  setInterval(() => {
    // menu button for comment
    const menuBtn = shadowRoot.querySelector("faceplate-dropdown-menu > faceplate-tracker > button")
    selectComment.menuBtn.click()
    
    // delete comment option from menu
    const deleteCommentBtn = shadowRoot.querySelector("faceplate-dropdown-menu > faceplate-menu > faceplate-tracker:nth-child(3) > li > div")
    selectComment.deleteCommentBtn.click()
    
    // modal delete button to confirm
    const deleteConfirmBtn = document.querySelector("#comment-deletion-modal").shadowRoot.querySelector("#deleteBtn")
    deleteConfirmBtn.click()
  }, 500);
} else {
  console.log("No comments to delete");
}
