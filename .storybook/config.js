import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/components/atoms/Atoms.story');
  require('../src/components/molecules/Molecules.story');
  require('../src/containers/organisms/Organisms.story');
}

configure(loadStories, module);
