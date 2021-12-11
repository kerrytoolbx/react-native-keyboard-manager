declare module 'react-native-keyboard-manager' {
  export type ToolbarBehaviour = 'subviews' | 'tag' | 'position';
  export type KeyboardAppearance = 'default' | 'light' | 'dark';

  export function setEnable(enable: boolean): void;
  export function setEnableDebugging(enable: boolean): void;
  export function setLayoutIfNeededOnUpdate(enable: boolean): void;
  export function setKeyboardDistanceFromTextField(distance: number): void;
  export function setEnableAutoToolbar(enable: boolean): void;
  export function setToolbarDoneBarButtonItemText(text: string): void;
  export function setToolbarManageBehaviourBy(behaviour: ToolbarBehaviour): void;
  export function setToolbarPreviousNextButtonEnable(enable: boolean): void;
  export function setToolbarTintColor(hexColor: string): void;
  export function setToolbarBarTintColor(hexColor: string): void;
  export function setShouldShowToolbarPlaceholder(enable: boolean): void;
  export function setOverrideKeyboardAppearance(enable: boolean): void;
  export function setKeyboardAppearance(appearance: KeyboardAppearance): void;
  export function setShouldResignOnTouchOutside(enable: boolean): void;
  export function setShouldPlayInputClicks(enable: boolean): void;
  export function setShouldToolbarUsesTextFieldTintColor(enable: boolean): void;
  export function resignFirstResponder(): void;
  export function reloadLayoutIfNeeded(): void;
  export function isKeyboardShowing(): Promise<boolean>;
}
