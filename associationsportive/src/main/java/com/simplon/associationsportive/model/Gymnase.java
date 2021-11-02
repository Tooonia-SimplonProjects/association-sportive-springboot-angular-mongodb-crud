package com.simplon.associationsportive.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

//@Document marks a class as being a domain object that we want to persist to the database
//and we can choose the name of the collection we want to use
@Document ("Gymnases")
public class Gymnase {

    private ObjectId objId = new ObjectId();

    //@Id marks a field in a model class as the primary key
    @Id
    //@Field allows to configure the name of a field we want to use when MongoDB persists the document
    //this annotation is the Mongo equivalent of @Column in JPA
    @Field("id")
    @MongoId
    private String id = String.valueOf(objId);

    @Field("IdGymnase")
    private int idGymnase;
//TODO:
//  If we want nomGymnase to be a unique name in the Gymnases collection: @Indexed(unique = true)
    @Field("NomGymnase")
    private String nomGymnase;

    @Field("Adresse")
    private String adresse;

    @Field("Ville")
    private String ville;

    @Field("Surface")
    private int surface;

    @Field("Seances")
    private List<Seance> seances;


    public Gymnase(int idGymnase, String nomGymnase, String adresse, String ville, int surface, List<Seance> seances) {
        this.idGymnase = idGymnase;
        this.nomGymnase = nomGymnase;
        this.adresse = adresse;
        this.ville = ville;
        this.surface = surface;
        this.seances = seances;
    }

    public String getId() { return id; }

    public void setId(String id) {
        this.id = id;
    }

    public int getIdGymnase() {
        return idGymnase;
    }

    public void setIdGymnase(int idGymnase) {
        this.idGymnase = idGymnase;
    }

    public String getNomGymnase() {
        return nomGymnase;
    }

    public void setNomGymnase(String nomGymnase) {
        this.nomGymnase = nomGymnase;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public int getSurface() {
        return surface;
    }

    public void setSurface(int surface) {
        this.surface = surface;
    }

    public List<Seance> getSeances() {
        return seances;
    }

    public void setSeances(List<Seance> seances) {
        this.seances = seances;
    }

    @Override
    public String toString() {
        return "Gymnase{" +
                "id='" + id + '\'' +
                ", idGymnase=" + idGymnase +
                ", nomGymnase='" + nomGymnase + '\'' +
                ", adresse='" + adresse + '\'' +
                ", ville='" + ville + '\'' +
                ", surface=" + surface +
                ", seances=" + seances +
                '}';
    }
}
