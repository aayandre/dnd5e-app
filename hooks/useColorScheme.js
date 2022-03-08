import { useColorScheme as _useColorScheme } from 'react-native';

// The useColorScheme value is always light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme() {
	const userThemeOption = localStorage.getItem('user-theme') || null;
	if(userThemeOption) {
		return userThemeOption;
	}
	return _useColorScheme();
}
