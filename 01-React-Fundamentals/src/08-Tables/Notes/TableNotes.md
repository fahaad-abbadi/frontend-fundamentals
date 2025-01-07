 - here, we use the data by doing the { props } thing
 - then, table is divided into two parts

    table
    /   \
head    body

- thead
- tbody

    thead
    /   \
  <tr>  <th>

    tbody
    /   \
 <tr>   <td>

- head
<thead>
    <tr>
        <th></th>
    </tr>
</thead>

- body
<tbody>
    <tr>
        <td></td>
    </tr>
</tbody>

- Iterating the data and displaying it in table format
- we use the map method in javascript, since there is switch to javascript, then `{}` gotta be used 
- we use data.map((item) => ), here inside map we don't use `{}` instead we use `()` parentheses again
- `()` parenthesis is used for returning jsx stuff
- `{}` is used for js stuff
- we use data.map((item) => {doing some javascript stuff, return(jsx stuff)})
- so for this table thing, we mostly gonna do this jsx stuff, and not vanilla javascript stuff

- conclusion:
- do the thead, and tbody thing
- do the data.map((item) => ()) thing, here we use () coz jsx and not vanilla js
- then inside data.map thing, we use <tr><td>{item.member}</td></tr>