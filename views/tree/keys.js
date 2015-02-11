
module.exports = {
  /*
  'cut': {
    insert: 'ctrl+x',
    normal: 'd d, shift+d, ctrl+x',
    visual: 'd, shift+d, ctrl+x',
  },
  'copy': {
    insert: 'ctrl+c',
    normal: 'y y, shift+y, ctrl+c',
    visual: 'y, shift+y, ctrl+c',
  },
  'paste': {
    insert: 'ctrl+v',
    normal: 'p, ctrl+v',
    visual: 'p, ctrl+v',
  },
  'paste above': {
    normal: 'shift+p, ctrl+shift+v',
  },
  */

  // switch modes
  'visual mode': {
    normal: 'v, shift+v',
  },
  'normal mode': {
    insert: 'escape',
    visual: 'escape, v, shift+v',
  },
  // switch to insert mode
  'edit': {
    normal: 'enter, a, shift+a, f2',
  },
  'edit start': {
    normal: 'i, shift+i',
  },
  'change': {
    normal: 'c c, shift+c',
    visual: 'c, shift+c',
  },
  'remove': {
    normal: 'd d, shift+d, delete',
    visual: 'd, shift+d, delete',
  },
  'join down': {
    normal: 'shift+j',
  },
  'join many': {
    visual: 'shift+j',
  },

  'toggle selection edge': {
    visual: 'o, shift+o',
  },

  'create after': {
    normal: 'o',
  },
  'create before': {
    normal: 'shift+o',
  },


  // cursor movement
  'go to first sibling': {
    normal: 'shift+[',
  },
  'extend to first sibling': {
    visual: 'shift+[',
  },
  'go to last sibling': {
    normal: 'shift+]',
  },
  'extend to last sibling': {
    visual: 'shift+]',
  },
  'go to bottom': {
    normal: 'shift+g',
  },
  'go to top': {
    normal: 'g g',
  },
  'go to last edited': {
    normal: 'g i',
  },
  'go up': {
    normal: 'up, k',
  },
  'go down': {
    normal: 'down, j',
  },
  'page down': {
    normal: 'page-down',
  },
  'page up': {
    normal: 'page-up',
  },

  // visual mode stuff
  'extend selection down': {
    visual: 'down, j',
  },
  'extend selection up': {
    visual: 'up, k',
  },

  // TODO allow visual mode to span parents/children?
  'go left': {
    normal: 'left, h',
  },
  'go right': {
    normal: 'right, l',
  },
  'go to next sibling': {
    normal: 'alt+j, alt+down',
  },
  'go to previous sibling': {
    normal: 'alt+k, alt+up',
  },

  // move stuff
  'indent': {
    normal: 'tab, shift+alt+l, shift+alt+right, shift+.',
    insert: 'tab, shift+alt+right',
  },
  'indent many': {
    visual: 'tab, shift+alt+l, shift+alt+right, shift+.',
  },
  'dedent': {
    normal: 'shift+tab, shift+alt+h, shift+alt+left, shift+comma',
    insert: 'shift+tab, shift+alt+left',
  },
  'dedent many': {
    visual: 'shift+tab, shift+alt+h, shift+alt+left, shift+comma',
  },

  'move down': {
    normal: 'shift+alt+j, shift+alt+down',
    visual: 'shift+alt+j, shift+alt+down',
  },
  'move up': {
    normal: 'shift+alt+k, shift+alt+up',
    visual: 'shift+alt+k, shift+alt+up',
  },

  'move to first sibling': {
    normal: 'ctrl+shift+[',
    visual: 'ctrl+shift+[',
  },
  'move to last sibling': {
    normal: 'ctrl+shift+]',
    visual: 'ctrl+shift+]',
  },

}
