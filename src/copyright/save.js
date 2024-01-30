import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { fallbackCurrentYear, copyrightText, showStartingYear, startingYear } = attributes;

    if ( ! fallbackCurrentYear ) {
        return null;
    }

	let displayText;
	if ( copyrightText ) {
		displayText = copyrightText;
	} else {
		displayText = 'All copyrights are resrved';
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
