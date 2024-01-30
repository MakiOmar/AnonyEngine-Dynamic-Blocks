/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { useEffect } from 'react';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const currentYear = new Date().getFullYear().toString();
	const { fallbackCurrentYear, copyrightText, showStartingYear, startingYear } = attributes;
	// When the block loads, set the fallbackCurrentYear attribute to the
    // current year if it's not already set.
    useEffect( () => {
        if ( currentYear !== fallbackCurrentYear ) {
            setAttributes( { fallbackCurrentYear: currentYear } );
        }
    }, [ currentYear, fallbackCurrentYear, setAttributes ] );
	let displayText;
	if ( copyrightText ) {
		displayText = copyrightText;
	} else {
		displayText = __( 'All copyrights are resrved', 'copyright-date-block' );
	}

	let displayDate;

	if ( showStartingYear && startingYear ) {
		displayDate = startingYear + '–' + currentYear;
	} else {
		displayDate = currentYear;
	}
	return (
		<>
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
			<TextControl
				label={ __(
					'Copyright text',
					'copyright-date-block'
				) }
				value={ copyrightText || '' }
				onChange={ ( value ) =>
					setAttributes( { copyrightText: value } )
				}
			/>
			<ToggleControl
				checked={ !! showStartingYear }
				label={ __(
					'Show starting year',
					'copyright-date-block'
				) }
				onChange={ () =>
					setAttributes( {
						showStartingYear: ! showStartingYear,
					} )
				}
			/>
			{ showStartingYear && (
					<TextControl
						label={ __(
							'Starting year',
							'copyright-date-block'
						) }
						value={ startingYear || '' }
						onChange={ ( value ) =>
							setAttributes( { startingYear: value } )
						}
					/>
				) 
			}
			</PanelBody>
        </InspectorControls>
		
		<p { ...useBlockProps() }>© { displayDate } { displayText }</p>
		</>
	);
}
