// Ensure click events always bubble up to the parent button
export function setupGTMClickHandling() {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const buttonParent = target.closest('button');
    
    if (buttonParent && target !== buttonParent) {
      event.stopPropagation();
      buttonParent.click();
    }
  }, true);
}