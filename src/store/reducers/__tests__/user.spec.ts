import { omit } from 'lodash';
import { user } from '../user';

const userMock = {
  nickname: 'Mock',
  email: 'mock@text.su',
  id: '123456789',
  isActivated: true,
};

const mockTokens = {
  accessToken: 'anyAccessToken',
  refreshToken: 'anyRefreshToken',
};

describe('should return correct store:', () => {
  let state: RootState = { user: null };

  afterEach(() => {
    state = { user: null };
  });

  it('should return null after logout:', () => {
    const logoutAction = {
      type: 'LOGOUT',
    };

    state.user = userMock;

    const newState = user(state.user, logoutAction);

    expect(newState).toEqual(null);
  });

  it('should return default state after dispatching unexisted action:', () => {
    const unexistedAction = {
      type: 'UNEXISTED',
    };

    const newState = user(state.user, unexistedAction);

    expect(newState).toEqual(null);
  });

  it('should return default state after registration:', () => {
    const registrationAction = {
      type: 'REGISTRATION_SUCCEED',
    };

    const newState = user(state.user, registrationAction);

    expect(newState).toEqual(null);
  });

  it('should return user state after success login:', () => {
    const loginAction = {
      type: 'LOGIN_SUCCEED',
      payload: {
        user: userMock,
        tokens: mockTokens,
      },
    };

    const userExpectation = omit(userMock, 'isActivated');

    const newState = user(state.user, loginAction);

    expect(newState).toEqual(userExpectation);
  });

  it('should return null after login if payload is undefined:', () => {
    const loginAction = {
      type: 'LOGIN_SUCCEED',
    };

    const newState = user(state.user, loginAction);

    expect(newState).toEqual(null);
  });
});
