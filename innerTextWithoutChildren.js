/* element.innerText also returns the innerText of all child elements,
   all garbled together.
   Sometimes, you  want the direct text nodes only. This does it. */
function innerTextWithoutChildren(element)
{
    return [].reduce.call(element.childNodes, function(a, b) { return a + (b.nodeType === 3 ? b.textContent : ''); }, '');
}
