<?php
/**
 * @file
 * used_boats.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function used_boats_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu_used-inventory:used-inventory
  $menu_links['main-menu_used-inventory:used-inventory'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'used-inventory',
    'router_path' => 'used-inventory',
    'link_title' => 'Used-Inventory',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_used-inventory:used-inventory',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'parent_identifier' => 'main-menu_showroom:<nolink>',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Used-Inventory');


  return $menu_links;
}
