/*        function selectPiece(element, color) {
          element.style.color = color;
        }                                              Original code used - had to change it cos they didn't go back to original colour  */
        let previousElement = null;

function selectPiece(element, color) {
    if (previousElement !== null) {
        previousElement.style.color = ''; 
    }
    element.style.color = color;
    previousElement = element;
}