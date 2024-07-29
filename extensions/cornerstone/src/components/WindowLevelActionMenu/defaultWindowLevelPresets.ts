// The following are the default window level presets and can be further
// configured via the customization service.
const defaultWindowLevelPresets = {
  CT: [
    { description: 'Lung', window: '1500', level: '-500' },
    { description: 'Bone', window: '2500', level: '480' },
  ],

  PT: [
    { description: 'Default', window: '5', level: '2.5' },
    { description: 'SUV', window: '0', level: '3' },
    { description: 'SUV', window: '0', level: '5' },
    { description: 'SUV', window: '0', level: '7' },
    { description: 'SUV', window: '0', level: '8' },
    { description: 'SUV', window: '0', level: '10' },
    { description: 'SUV', window: '0', level: '15' },
  ],
};

export default defaultWindowLevelPresets;
