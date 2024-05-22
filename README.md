# Delete Reddit Comments

Below is a simple script I have created that you can use to delete your comments on Reddit.

Log in to your Reddit account and go to the `/user/[username]/comments/` page. <br>
Open the console in your browser while on the above page, copy the below code, paste it into the console and press enter to execute the script.

```
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
```
An interval of 500ms is set to avoid potential issues with throttling. <br>
Once the script begins to delete comments on the page, it will continue until all comments have been deleted. <br>
Do not close or navigate away from the 'comments' page while the comments are being deleted or else it will stop the deletion process. <br>

***Note: Reddit frequently updates the DOM so if it has been a while, the selectors in the script may need updating for it to work.***


