<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$current_year = date( "Y" );

// Determine which content to display.
if ( isset( $attributes['fallbackCurrentYear'] ) && $attributes['fallbackCurrentYear'] === $current_year ) {
	// The current year is the same as the fallback, so use the block content saved in the database (by the save.js function).
    $block_content = $content;
} else {
	if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
		$display_date = $attributes['startingYear'] . '–' . $current_year;
	} else {
		$display_date = $current_year;
	}

	if ( ! empty( $attributes['copyrightText'] ) ) {
		$display_text = $attributes['copyrightText'] ;
	} else {
		$display_text = __( 'All copyrights are resrved', 'copyright-date-block' );
	}
	$block_content = '<p '. get_block_wrapper_attributes() . '>
	© ' . $display_date . ' ' . $display_text . '
	</p>';
}
echo wp_kses_post( $block_content );