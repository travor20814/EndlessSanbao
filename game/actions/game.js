export const UPDATE_CHARACTOR_POSITION = Symbol('UPDATE_CHARACTOR_POSITION');

export function updateCharactorPosition(position) {
  return {
    type: UPDATE_CHARACTOR_POSITION,
    position,
  };
}
