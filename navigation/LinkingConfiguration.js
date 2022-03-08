import * as Linking from 'expo-linking';

const linking = {
	prefixes: [Linking.createURL('/')],
	config: {
		screens: {
			Root: {
				screens: {
					TabOne: {
						screens: {
							TabOneScreen: 'one',
						},
					},
					TabTwo: {
						screens: {
							TabTwoScreen: 'two',
						},
					},
					TabThree: {
						screens: {
							TabThreeScreen: 'three',
						},
					},
				},
			},
			Modal: 'modal',
			NotFound: '*',
		},
	},
};

export default linking;
