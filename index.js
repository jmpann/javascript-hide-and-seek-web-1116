function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
/* index nestedTarget() pulls a .target out of #nested:*/
return document.querySelector('#nested .target')
/*must have space between selectors*/
/*The ID selector consists of a hash/pound symbol (#), followed by the ID name of a given element.*/
/*The class selector consists of a dot, '.', followed by a class name. A class name is any value without spaces put within an HTML class attribute.*/
/*Here we are selecting an ID (nested) of the class (target). Nested is a type of target.*/
/*returns the first value that matches the class of target under the ID of nested*/

/*document.querySelector('.nested #target')
  returns <div id="target">
                1
              </div>
*/

/*document.querySelector('#nested .target') returns<div class="target">
              1
            </div>
the id and class don't matter for this example. ID, class, element are CSS specific things that warrant more study as to the specific differences between them.*/
}

function deepestChild() {

  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  /*Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()*/
  const rankedLists = document.querySelectorAll('.ranked-list')
  /*returns a list of nodes matching class name "ranked-list"*/
  /*returns a Node list object. In this case : [ul.ranked-list, ul.ranked-list] because you have two elements of the class ranked-list in your html document. These objects have tons of properties (like all its html text) you can manipulate*/
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    /*iterates over the two elements of your node list. */
    let children = rankedLists[i].children
    /*rankedLists[i] returns the html of that node. EX:
    <ul class="ranked-list">
      <li>1</li>
      <li>2</li>
    </ul>*/

    /*.children returns an HTMLCollection of the elements (defined by the ele tags). In this case [li, li]. you can call .children on this too. */
    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
    /*iterating through the children of the children an increasing the innerHTML by a numbder*/
  }
}
