# Laboratorio 00

1. Creamos repo local e inicializamos con --> git init 
 -- Staging --> git add .

2. Creamos repo en la nube --> laboratorio--00
 -- Copiamos url del repo en la nube 
 --Conectamos ambos con git remote add origin -> ssh del repo en la nube 

3. Hacemos un commit --> git commit -m "ficheros iniciales"
 -- y un push --> git push --set-upstream origin main

4. Creamos un rama nueva --> git branch development y git checkout development 
 -- añado este texto a readme , commit, push 
 -- volviendo a main , cambios, commit, push
 -- hacemos merge (aparee conflicto en readme)