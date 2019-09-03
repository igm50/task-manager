import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/components/atoms/TaskList.story')
}

configure(loadStories, module);
