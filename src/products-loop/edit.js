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
import { useState, useEffect } from 'react';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __experimentalDimensionControl as DimensionControl } from '@wordpress/components';
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( attributes, setAttributes ) {
	const { productsIds, author, enableSlider } = attributes;
	const [ height, setHeight ]                     = useState( '' );
	const [ width, setWidth ]                       = useState( '' );
	const [ desktopItemWidth, setDesktopItemWidth ] = useState( '' );
	const [ mobileItemWidth, setMobileItemWidth ]   = useState( '' );

	useEffect(() => {
		setHeight(attributes.height || '500px');
		setWidth(attributes.width || '100vw');
		setDesktopItemWidth(attributes.desktopItemWidth || '320px');
		setMobileItemWidth(attributes.mobileItemWidth || '150px');
	}, []);

	return (
		<>
		<InspectorControls>
			<PanelBody title={ __( 'Loop Settings', 'anonyengine-dynamic-blocks' ) }>
				<TextControl
					label={ __(
						'Products IDs',
						'anonyengine-dynamic-blocks'
					) }
					value={ productsIds || '' }
					onChange={ ( value ) =>
						setAttributes( { productsIds: value } )
					}
				/>
				<NumberControl
					label={ __(
						'Products\'s author',
						'anonyengine-dynamic-blocks'
					) }
					value={ author || '' }
					onChange={ ( value ) =>
						setAttributes( { author: value } )
					}
				/>
				

				<ToggleControl
					checked={ !! enableSlider }
					label={ __(
						'Enable slider',
						'anonyengine-dynamic-blocks'
					) }
					onChange={ () =>
						setAttributes( {
							enableSlider: ! enableSlider,
						} )
					}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Loop style', 'anonyengine-dynamic-blocks' ) }>
				<UnitControl
					label={ 'Width' }
					icon={ 'desktop' }
					onChange={ (value) => setWidth(value) }
					value={ width || '100vw'}
					units={ [ { value: 'px', label: 'px' }, { value: '%', label: '%' }, { value: 'em', label: 'em' }, { value: 'vw', label: 'vw' } ] }
				/>
				
				<UnitControl
					label={ 'Height' }
					icon={ 'desktop' }
					onChange={ (value) => setHeight(value) }
					value={ height || '500px' }
					units={ [ { value: 'px', label: 'px' }, { value: '%', label: '%' }, { value: 'em', label: 'em' }, { value: 'vh', label: 'vh' } ] }
				/>
				
				<UnitControl
					label={ 'Item width (Desktop)' }
					icon={ 'desktop' }
					onChange={ (value) => setDesktopItemWidth(value) }
					value={ desktopItemWidth || '320px' }
					units={ [ { value: 'px', label: 'px' }, { value: '%', label: '%' }, { value: 'em', label: 'em' }, { value: 'vw', label: 'vw' } ] }
				/>
				
				<UnitControl
					label={ 'Item width (Mobile)' }
					icon={ 'desktop' }
					onChange={ (value) => setMobileItemWidth(value) }
					value={ mobileItemWidth || '150px' }
					units={ [ { value: 'px', label: 'px' }, { value: '%', label: '%' }, { value: 'em', label: 'em' }, { value: 'vw', label: 'vw' } ] }
				/>
			</PanelBody>
		</InspectorControls>
		<p { ...useBlockProps() }>
			{ width }<br/>
			{ height }<br/>
			{ desktopItemWidth }<br/>
			{ mobileItemWidth }<br/>
			{ __( 'Anony Products Loop – hello from the editor!', 'anony_products_loop' ) }
		</p>
		</>
	);
}
