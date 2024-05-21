// check to see if a comment exists
if (document.querySelector('.Comment [aria-label="more options"]')) {
  setInterval(() => {
    // expands the 'more options' menu represented by '...' aka 'meatball menu' for 
    // the top most comment in the list of comments on the page.
    document.querySelector('.Comment [aria-label="more options"]').click();
  
    // clicks the 'delete' button in the menu that pops up for the comment to be deleted
    let deleteComment = document.querySelectorAll('button[role="menuitem"]')[3];
    deleteComment.click();
  
    // clicks the 'delete' button in the modal that pops up to confirm deletion
    let deleteButton = document.querySelectorAll('footer button')[1];
    deleteButton.click();
  }, 300);
} else {
  console.log("No comments to delete");
}
