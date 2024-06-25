import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

const SettingsPage = () => {
    return <div><h1>Placeholder for settings page</h1></div>;
};

domReady( () => {
    const root = createRoot(
        document.getElementById( 'root' )
    );

    root.render( <SettingsPage /> );
} );
