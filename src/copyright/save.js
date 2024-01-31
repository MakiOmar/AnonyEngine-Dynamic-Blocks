import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
export default function save( { attributes } ) {
	const { fallbackCurrentYear, copyrightText, showStartingYear, startingYear } = attributes;

    if ( ! fallbackCurrentYear ) {
        return null;
    }

	let displayText;
	if ( copyrightText ) {
		displayText = copyrightText;
	} else {
		displayText = __( 'All copyrights are resrved', 'anonyengine-dynamic-blocks' );
	}

	let displayDate;

	if ( showStartingYear && startingYear ) {
		displayDate = startingYear + '–' + fallbackCurrentYear;
	} else {
		displayDate = fallbackCurrentYear;
	}
    return (
        <p { ...useBlockProps.save() }>© { displayDate } { displayText }</p>
    );
}
