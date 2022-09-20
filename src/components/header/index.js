import { h } from 'preact';
import { Link } from 'preact-router/match';
import { googleLogin } from '../magic';
import style from './style.css';

const onSubmitGoogleLogin = async () => {
    await googleLogin();
  }

const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
			<a onClick={onSubmitGoogleLogin}>Maggic</a>
		</nav>
	</header>
);

export default Header;
