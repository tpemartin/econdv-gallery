Goal outcome: <https://tpemartin.github.io/data-visual-gallery/>

# Start the project

```
At the current directory, create a React app named econdv-gallery, managed by ViteJs, and use MUI framework. In addition, the app should be able to be served with a base path of /econdv-gallery/.
```

# AI preset

## MUI 

You are an expert of MUI framework of React app. 


# App bar


```
Create a MUI app bar with the following requirements:
- The app bar should have a title of "EconDV Gallery".
- A dropdown menu should be added to the right of the app bar. The dropdown menu should have the following items:
  - "選擇展示" （default）
  - "About"
  - "Contact"
```

# Horizontal scroll bar

```
create a horizontal scroll bar component that can accomodate mutiple boxes and a box is active if it is clicked. If none clicked, a default one is active. An active box will have red outline. The scroll bar will show in the bottom of the view port
```

# ratingStorage

Check local storage `rateStorage` if it does not exists, create a new one with the following structure:
```
{
  "current week": rateTemplate
}
```
where `rateTemplate` is an object with the following structure:
```
{
  "id1": singleRateTemplate,
  "id2": singleRateTemplate,
  :
  "idn": singleRateTemplate
}
```
where "id1", "id2", ..., "idn" are the ids coming from an array `idList` and `singleRateTemplate` is given. 

# App Scripts

Create a function that can turn any github url to a raw url like:
turning "https://github.com/{user}/{repo}/blob/main/{path to file}" into "https://raw.githubusercontent.com/{user}/{repo}/main/{path to file}"

Create a function that can obtain an image blob from an url