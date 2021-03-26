import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export default class Firebase {
  constructor() {
    app.initializeApp(config);
    app.auth().setPersistence(app.auth.Auth.Persistence.LOCAL);
    this.auth = app.auth();
    this.storage = app.storage();
    this.db = app.database();
  }
  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithGoogle = () => {
    const provider = new this.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  };

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = (newPassword) =>
    this.auth.currentUser.updatePassword(newPassword);

  reAuth = (oldPassword) =>
    this.auth.currentUser.reauthenticateWithCredential(
      app.auth.EmailAuthProvider.credential(
        this.auth.currentUser.email,
        oldPassword
      )
    );
}
