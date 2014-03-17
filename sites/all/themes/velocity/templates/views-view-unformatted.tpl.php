<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
    <div class="views-row-inner">
	  <?php print $row; ?>
    </div>
  </div>
<?php endforeach; ?>
<?php
if($_GET['q']=="dealer-services") {
drupal_add_css(path_to_theme() . '/services.css', 'theme', 'all');
}
?>