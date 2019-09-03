import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/components/atoms/Atoms.story');
}

configure(loadStories, module);
