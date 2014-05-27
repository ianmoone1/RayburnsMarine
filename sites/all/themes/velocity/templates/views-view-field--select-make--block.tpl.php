<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
?>
<?php 
	$mastercraft = $row->field_field_make_image[0]['rendered']['#item']['uri']; 
	$mastercraft=file_create_url($mastercraft);
	$cobalt = $row->field_field_make_image[1]['rendered']['#item']['uri'];
	$cobalt=file_create_url($cobalt);
	$regal = $row->field_field_make_image[2]['rendered']['#item']['uri'];
	$regal=file_create_url($regal);
	$crownline = $row->field_field_make_image[3]['rendered']['#item']['uri'];
	$crownline=file_create_url($crownline);

  echo'
  <ul>
  <li>
		<div class="field-make-image"><a href="/?q=mastercraft"><img src="'.$mastercraft.'"></a></div>
	</li>
	<li>
		<div class="field-make-image"><a href="/?q=cobalt"><img src="'.$cobalt.'"></a></div>
		</li>
		<li>
		<div class="field-make-image"><a href="/?q=regal"><img src="'.$regal.'"></a></div>
		</li>
		<li>
		<div class="field-make-image"><a href="/?q=crownline"><img src="'.$crownline.'"></a></div>
		</li>
	</ul>
  ';

?>
