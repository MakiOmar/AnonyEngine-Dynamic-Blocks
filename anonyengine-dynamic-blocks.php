<?php
/**
 * Plugin Name:       Anonyengine Dynamic Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       anonyengine-dynamic-blocks
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function anonyengine_dynamic_blocks_anonyengine_dynamic_blocks_block_init() {
	register_block_type( __DIR__ . '/build/image-box' );
	register_block_type( __DIR__ . '/build/copyright' );
	register_block_type( __DIR__ . '/build/products-loop' );
}
add_action( 'init', 'anonyengine_dynamic_blocks_anonyengine_dynamic_blocks_block_init' );
