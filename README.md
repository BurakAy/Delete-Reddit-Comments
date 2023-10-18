# Delete-Reddit-Comments

Below is a simple script I have created that you can use to delete your comments on Reddit.

Log in to your Reddit account and go to the `/user/[username]/comments/` page. <br>
Open the console in your browser while on the above page, copy the below code, and paste it into the console. Press enter to execute the script.

```
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
```
An interval of 300ms is set to avoid potential issues with throttling. <br>
Once the script begins to delete comments on the page, it will continue until all comments have been deleted.


